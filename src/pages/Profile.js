import SocialMedia from "./SocialMedia"
import { useEffect, useState } from 'react'
import ShimmerCard from "../components/ShimmerCard"


const Profile = () => {
    const [Githubprofile, setGithubprofile] = useState(null)
    useEffect(() => {
        Getgithubusers()
    }, [])
    const Getgithubusers = async () => {
        const data = await fetch('https://api.github.com/users/adilnawaz256')
        const json = await data.json()
        setGithubprofile(json)
    }
    // console.log(Githubprofile);

    return (!Githubprofile) ? <ShimmerCard/>:(
        <div className="flex justify-center">
            <div className="shadow w-80 h-96 m-10">
                <h1 className="text-center font-bold m-8 text-xl">About Me </h1>
                <img src={Githubprofile?.avatar_url} alt="" width="110px" className="rounded-full m-auto"/>
                <div>
                    <h3 className="text-black text-center font-bold text-2xl">{Githubprofile?.name}</h3>
                    <p className="text-center font-semibold">{Githubprofile?.bio}</p>
                </div>
                <SocialMedia/>
            </div>
            </div>

    )
}
export default Profile