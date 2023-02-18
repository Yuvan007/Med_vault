import Header from "../../components/Header";
import Login from "../../components/Login";

function Page(){

    return (
        <>
            <Header/>
            <main className="flex-1 flex justify-center align-middle">
                <Login/>
            </main>
        </>
    )
}

export default Page;