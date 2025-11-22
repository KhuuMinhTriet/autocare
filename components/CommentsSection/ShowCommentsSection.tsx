import { checkUser } from "@/lib/checkUser";
import { CommentsSection } from "./CommentsSection";

export default async function Comments() {
    const user = await checkUser()
    return (
        <div>
            <CommentsSection user={user} />
        </div>
    )
}
