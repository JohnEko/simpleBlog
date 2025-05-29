import "./propertyItems.css"
import Link from "next/link"


const PropertyItems = () => {


    return(
        <main>
            <div className="post">
               <div className="image">
                    <img
                        src="./villa.jpg"
                        alt="Beach_house"
                   
                    />
                </div>


                <div className="texts">
                    <h2>Sometimes, Your Breakthrough Won’t Come From Where You Are</h2>
                    <p className="info">
                        <Link href={""} className="author"> John Ame</Link>
                        <time>2025-01-06 10:45</time>


                    </p>
                    <p className="summary">A few months ago, I got a solid job offer for someone I know—let’s call him Tunde. It was in Owerri, at a 4-star hotel, paying ₦600,000/month,</p>
                </div>


            </div>


        </main>
    )
}
export default PropertyItems