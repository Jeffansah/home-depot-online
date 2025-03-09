import Logo from "@/app/components/shared/logo";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-20 bg-white">
      <Logo />
      <SignIn />
    </div>
  );
}
