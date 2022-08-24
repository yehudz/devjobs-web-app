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
        gap-8
        mt-6
        md:mt-10
        lg:max-w-[90%]
        xl:max-w-[1110px]
      "
    >
      {children}
    </div>
  )
}

export default PostingsContainer