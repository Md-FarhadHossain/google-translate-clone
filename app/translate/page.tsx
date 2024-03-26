import { auth } from "@clerk/nextjs/server"

const TranslatePage = () => {
  auth().protect()

  const { userId } = auth()

  return (
    <div>
      Translate Page: {userId}
      {/* Translation page */}
    </div>
  )
}
export default TranslatePage