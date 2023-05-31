import { ModalConfirm } from "@/components/ModalConfirm";

interface ParamsProps {
  params: {
    id: string;
  };
}

export default function Remove({ params }: ParamsProps) {
  // const router = useRouter();

  return <ModalConfirm id={params.id} />;
}
