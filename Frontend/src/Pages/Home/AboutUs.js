const Card = ({ image, title, description }) => {
    return (<div className="flex-1">
        <div className=" flex md:flex-col items-center text-white w-full p-8 my-8">
            <div className="font-bold text-xl md:pb-16 md:text-5xl text-white w-full text-center">{title}</div>
            <div className="w-full h-20 text-center text-white">{description}</div>

        </div>

    </div>);
}
const cardData = [
    {
        //image:Add image
        title: "Mint",
        description: "Get your own PsyMon from our store",
    },
    {
        title: "Earn",
        description: "For every PsyMon that gets minted after yours you get reflection rewards.",
    },
    {
        title: "Play",
        description: "Interact with your PsyMons in AR, PvP, PvE and more to come!",
    },
]
const HowItWorks = () => {
    return (<div className="w-full my-16 py-16">
        <div className="container mx-auto px-6">
            <div className="font-bold text-3xl text-white w-full text-center mb-32">Buy and sell NFT's</div>
            <div className="flex flex-col md:flex-row justify-evenly items-center">
                {cardData.map((data) => <Card {...data} />)}
            </div>
        </div>
    </div>)
}
export default HowItWorks;