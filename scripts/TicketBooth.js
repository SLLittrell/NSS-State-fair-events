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
    
    else if (clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                purchasedTicket : "Ticket"
                
            }  
        })
    
        // console.log("click")
        // debugger
        eventHub.dispatchEvent(foodEvent)

    }
    else if (clickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                purchasedTicket : "Ticket"
                
            }  
        })
    
        // console.log("click")
        // debugger
        eventHub.dispatchEvent(gameEvent)

    }
    else if (clickEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                purchasedTicket : "Ticket"
                
            }  
        })
    
        // console.log("click")
        // debugger
        eventHub.dispatchEvent(sideshowEvent)

    }
    else if (clickEvent.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased", {
            detail: {
                purchasedTicket : "Ticket"
                
            }  
        })
    
        // console.log("click")
        // debugger
        eventHub.dispatchEvent(fullPackageEvent)

    }
        
})





export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}


