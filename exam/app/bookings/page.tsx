import { getReservation, removeReservation } from "@/lib/Reservation";
import Link from "next/link";


export default async function Bookings() {
    const book = await getReservation()
    return (<>
            <h1 className="text-3xl text-center underline">Bookings</h1>

            <h2 className="underline text-xl">All the bookings: </h2>

    <div>
        {book?.map((bookings) => (
			<div key={bookings.id} className="flex justify-center gap-1">
				<form className="md:w-4xl w-100 min-h-20 border-2 rounded text-indigo-950 m-4 grid grid-cols-8">
					<div className="col-span-7">
                        <h3 className="mx-1 my-1 text-l underline">Reservation name: </h3>
						<input name="name" className=" m-2 text-l col-start-1 w-190	" defaultValue={bookings.name}/>
                        <h3 className="mx-1  text-l underline">Phone number: </h3>
						<textarea name="number" className="m-1 md:w-190 w-95 resize-none h-7 col-start-1" 
								  defaultValue={bookings.number}/>
						
						<h3 className="mx-1 my-1 text-l underline">Number of persone: </h3>
						<textarea name="nbrpersone" className="m-1 md:w-190 w-95 resize-none h-7 col-start-1" 
								  defaultValue={bookings.nbrpersone}/>
                        <h3 className="mx-1  text-l underline">Reservation time: </h3>
                        <textarea name="time" className="m-1 md:w-190 w-95 resize-none h-7 col-start-1" 
								  defaultValue={bookings.time}/>
						
						<input type="hidden" name="id" value={bookings.id}/>
					</div>

					<div className="pt-3 col-span-1">
						<button className="m-1 border-2 p-1 w-20 col-end-2  hover:bg-slate-600 hover:text-white active:bg-slate-400  transition-colors" 
                                formAction={removeReservation}>
							Delete
						</button>

						<Link href={`/bookings/${bookings.id}`}>
							<button className="m-1 border-2 p-1 w-20 hover:bg-slate-600 hover:text-white active:bg-slate-400 transition-colors">
								Edit
							</button>
						</Link>
					</div>
				</form>
			</div>
        ))}
      </div>
    </> 


  );
}