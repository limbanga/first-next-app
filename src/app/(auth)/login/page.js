import Paper from "@/app/_components/base/Paper";
import { Button, Card, Input } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <div className="sm:container mx-auto">
      <div className="max-w-96 mx-auto text-center">
        <Card shadow="none" className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center">Login</h1>
          <Input label={"Email"} size="sm" />
          <Input label={"Password"} size="sm" />
          <div className="text-end">
            <Button color="success" size="small">
              Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
