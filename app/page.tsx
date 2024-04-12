import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return ( 
    <div className="bg-slate-700 h-screen">
      <div>
        <Button>
          Delete
        </Button>
      </div>
    </div>
  );
}
