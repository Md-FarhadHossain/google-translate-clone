import { SignInButton, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    const { userId } = auth()

  return (
    <header className="flex items-center justify-between border-b mb-5 px-8">
        <div className="h-20 flex items-center overflow-hidden justify-center">
            <Link href="/">
                <Image src="https://links.papareact.com/xgu" alt="logo" width={200} height={100} className="h-32 object-contain cursor-pointer" />
            </Link>
        </div>

        {
            userId ? (
            <div><UserButton /></div>
            ) : (
                <div>
                    <SignInButton afterSignInUrl="/translate" mode="modal" />
                </div>
            )
        }
        
    </header>
  )
}
export default Header