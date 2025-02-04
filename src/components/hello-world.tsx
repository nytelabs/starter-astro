// Modules
import * as React from "react";

// Types
type HelloWorldProps = {};

// Component
export const HelloWorld: React.FC<HelloWorldProps> = (): React.ReactElement => {
  return (
    <div className="flex">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quae ullam
      quo eos nulla cumque officia blanditiis expedita mollitia ducimus fugiat
      maiores soluta animi placeat cupiditate inventore error! Nam, doloremque!
    </div>
  );
};
