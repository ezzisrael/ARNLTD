import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "@/components/chat/Chatbot";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <Chatbot />
    </div>
  );
}
