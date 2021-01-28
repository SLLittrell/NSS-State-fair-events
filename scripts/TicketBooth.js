const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    // console.log("Ticket Purchased")
    // debugger
    if (clickEvent.target.id === "rideTicket") {
        // Create custom event. Provide an appropriate name.
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                purchasedTicket : "Ticket"
                
            }   
            
        })
        
        eventHub.dispatchEvent(rideEvent)
    }
        
})





export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

