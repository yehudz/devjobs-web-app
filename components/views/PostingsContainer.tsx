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
        mt-[40px]
        mx-auto
      "

    >
      {children}
    </div>
  )
}

export default PostingsContainer