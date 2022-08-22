import { useState } from "react";

const ToggleSwitch = ()=> {
    const [enabled, setEnabled] = useState(false);

    return (
        <div 
          className="
            relative 
            flex 
            flex-col 
            items-center 
            justify-center 
            min-h-screen 
            overflow-hidden
          "
          >
          <div className="flex items-center">
            <img 
              src="assets/desktop/icon-sun.svg" 
              alt="Ligth Theme"
              className="mr-6 w-full h-full"
            />
            <label 
              className="
                inline-flex 
                relative 
                items-center 
                mr-5 
                cursor-pointer
              "
            >
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
              />
              <div
                onClick={() => {
                    setEnabled(!enabled);
                }}
                className="
                  w-12 
                  h-7 
                  bg-white
                  rounded-full 
                  peer 
                  peer-checked:after:translate-x-[100%] 
                  after:content-[''] 
                  after:absolute 
                  after:top-[4px] 
                  after:left-[4px] 
                  after:bg-violet 
                  after:rounded-full 
                  after:h-5 
                  after:w-5 
                  after:transition-all 
                "
              ></div>
            </label>
            <img 
              src="assets/desktop/icon-moon.svg" 
              alt="Ligth Theme"
              className="ml-1 mt-1 w-full"
            />
          </div>
        </div>
    );
}

export default ToggleSwitch