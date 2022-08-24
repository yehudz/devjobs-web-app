import ToggleSwitch from "./ToggleSwitch"

const TopBar: React.FC = ()=> {
  return(
    <div 
      data-testid="topbar-container"
      className="
        topbar
        relative
        h-[136px]
        md:h-[160px]
        lg:h-[160px]
        md:rounded-bl-[100px]
        w-full
        overflow-hidden
      "
    >
      <div 
        data-testid="main-logo"
        className="
          logo
          absolute
          p-8
          md:p-10
        "
      >
        <img 
          src="/assets/desktop/logo.svg" 
          alt="Logo" 
        />
      </div>
      <div 
        className="
          toggle-switch
          absolute
          top-9
          right-8
          md:top-11
          md:right-10
          h-[136px]
          z-50
        "
      >
        <ToggleSwitch />
      </div>
    </div>
  )
}

export default TopBar