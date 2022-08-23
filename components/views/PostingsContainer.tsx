import type { ContentProps } from "../../typings/common.interfaces"

const PostingsContainer: React.FC<ContentProps> = ({children})=> {
  return(
    <div
      data-testid="postings-container"
      className="
        flex
        flex-row
        flex-wrap
        justify-center
        mt-[8px]
        mx-auto
        gap-4
        lg:max-w-[90%]
        xl:max-w-[1100px]
      "
    >
      {children}
    </div>
  )
}

export default PostingsContainer