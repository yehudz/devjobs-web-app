import { useState } from "react";

const ToggleSwitch = ()=> {
    const [enabled, setEnabled] = useState(false);

    return (
        <div 
          data-testid="toggle-theme-container"
          className="
            relative 
            flex 
            flex-col 
            items-center 
            justify-center 
            overflow-hidden
          "
          >
          <div className="flex items-center">
            <img 
              src="assets/desktop/icon-sun.svg" 
              alt="Ligth Theme"
              className="mr-5 w-full h-full"
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
                  w-[45px] 
                  h-[23px] 
                  bg-white
                  rounded-full 
                  peer 
                  peer-checked:after:translate-x-[128%] 
                  after:content-[''] 
                  after:absolute 
                  after:top-[4px] 
                  after:left-[6px] 
                  after:bg-violet 
                  after:rounded-full 
                  after:h-[15px] 
                  after:w-[15px] 
                  after:transition-all 
                "
              ></div>
            </label>
            <img 
              src="assets/desktop/icon-moon.svg" 
              alt="Ligth Theme"
              className="ml-0 mt-1 w-full"
            />
          </div>
        </div>
    );
}

export default ToggleSwitch