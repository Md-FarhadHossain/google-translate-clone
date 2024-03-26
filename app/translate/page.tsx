import TranslationForm from "@/components/TranslationForm"
import { auth } from "@clerk/nextjs/server"

const TranslatePage = async () => {
  auth().protect()

  const { userId } = auth()

  if (!userId) throw new Error("User not logged in!")

  const languagesEndPoint = 
  "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";

  const response = await fetch(languagesEndPoint, {
    next: {
      revalidate: 60 * 60 * 24
    }
  })

  return (
    <div>
      Translate Page: {userId}
      {/* Translation Form */}
      <TranslationForm />

      {/* Translation History */}
    </div>
  )
}
export default TranslatePage