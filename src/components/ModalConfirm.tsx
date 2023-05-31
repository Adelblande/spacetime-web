"use client";

import Link from "next/link";
import { CustomButton } from "./CustomButton";
import { api } from "@/lib/api";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface ModalConfirmProps {
  id: string;
}

export function ModalConfirm({ id }: ModalConfirmProps) {
  const router = useRouter();

  async function handleConfirm() {
    const token = Cookies.get("token");
    await api.delete(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    router.push("/");
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-purple-800">
      <div className="flex h-40 w-80 flex-col items-center justify-center gap-5 rounded-md bg-white ">
        <p className=" text-center text-purple-500">
          Deseja realmente excluir a memória?
        </p>
        <div className="flex justify-between gap-4">
          <CustomButton
            value="Sim"
            background="bg-purple-800"
            textColor="text-white"
            handleClick={handleConfirm}
          />
          <Link
            href="/"
            className="flex h-10 w-20 items-center justify-center rounded-md bg-pink-500 text-white"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
}
