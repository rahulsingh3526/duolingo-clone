import { Button } from "@/components/ui/button";
import React from "react";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button variant="default">default </Button>
      <Button variant="primary">Primary </Button>
      <Button variant="primaryOutline" size="lg">
        {" "}
        Primary Outline
      </Button>
      <Button variant="secondary">Secondary </Button>
      <Button variant="secondaryOutline" size="lg">
        {" "}
        Secondary Outline
      </Button>
      <Button variant="danger">Danger </Button>
      <Button variant="dangerOutline" size="lg">
        {" "}
        Danger Outline
      </Button>

      <Button variant="super">Super </Button>
      <Button variant="superOutline" size="lg">
        {" "}
        Super Outline
      </Button>
      <Button variant="ghost" size="lg">
        {" "}
        ghost
      </Button>

      <Button variant="sidebar">Sidebar </Button>
      <Button variant="sidebarOutline"> Sidebar Outline</Button>
    </div>
  );
};

export default ButtonsPage;
