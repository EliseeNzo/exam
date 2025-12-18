import { getReservation, editReservation} from "@/lib/Reservation";

export const dynamic = 'force-dynamic';

export default async function editReservations({params,}: {params: { id: string };}) {
    const { id } = await params;
    const book = await getReservation();
    const Reservation = book?.find(book => book.id === id);

    if (!Reservation) {
    return (
      <>
        <p>Boonking not found!</p>
        <textarea defaultValue={id} />
      </>
    );
  }

    return(<>
            <div className="p-4">
                <h1 className="text-3xl underline text-center">Edit Article</h1>

                    <form className="grid gap-4 text-indigo-950 my-4" action={editReservation} >
                        <h2>Reservation name:</h2>
                            <input type="hidden" name="id" defaultValue={Reservation.id} />
                            <input name="name" defaultValue={Reservation.name} className="border p-1" />
                        <h2>Phone number:</h2>
                            <textarea name="number" defaultValue={Reservation.number} className="border p-1" />
                        <h2>Number of persone:</h2>
                            <textarea name="nbrpersone" defaultValue={Reservation.nbrpersone} className="border p-1" />
                        <h2>Reservation time:</h2>
                            <textarea name="time" defaultValue={Reservation.time} className="border p-1" />
                        <button  className="border p-2 m-1 rounded bg-slate-900 hover:bg-slate-600 hover:text-white active:bg-slate-400 transition-colorsbg-slate-600 text-white">
                        Save
                        </button>
                    </form>
            </div>
    </>)
}