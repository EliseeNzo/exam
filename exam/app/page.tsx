

import { addReservation } from "@/lib/Reservation";
import Image from "next/image";

export default function Home() {
  return (<>
          <h1 className="text-3xl text-center">Want to make a reservation ?</h1>

          <form className="text-center py-10" action={addReservation} >
        <div className="mx-auto w-fit grid grid-cols-[150px_1fr] gap-x-4 gap-y-3 items-center">
            <label>Reservation name:</label>
                <input className="border rounded" type="text" name="name"  />

            <label>phone number:</label>
                <input className="border rounded" type="int" name="number" />

            <label>Number of persone attending:</label>
                <input className="border rounded" type="int" name="nbrpersone" />

            <label>time:</label>
                <input className="border rounded" type="text" name="time" />
        </div>


        <button className="block mx-auto mt-4 w-60 h-10 bg-slate-600 text-white rounded hover:bg-slate-300 hover:text-black " type="submit">Make a reservation !</button>
        </form> 
  </>

  );
}
