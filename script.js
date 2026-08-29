/* =========================================
   YTBOOSTKIT - MAIN JAVASCRIPT
   ========================================= */


/* =========================================
   TOOL SEARCH
   ========================================= */

function searchTools() {

    const searchInput = document.getElementById("toolSearch");

    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();

    const toolCards = document.querySelectorAll(".tool-card");

    let foundTools = 0;


    toolCards.forEach(function(card) {

        const toolName = card
            .getAttribute("data-name")
            .toLowerCase();

        if (
            searchTerm === "" ||
            toolName.includes(searchTerm)
        ) {

            card.style.display = "block";

            foundTools++;

        } else {

            card.style.display = "none";

        }

    });


    /* Scroll to tools */

    const toolsSection = document.getElementById("tools");

    if (searchTerm !== "") {

        toolsSection.scrollIntoView({
            behavior: "smooth"
        });

    }


    /* No result message */

    let noResult = document.getElementById("noResult");


    if (foundTools === 0) {

        if (!noResult) {

            noResult = document.createElement("p");

            noResult.id = "noResult";

            noResult.style.textAlign = "center";

            noResult.style.padding = "30px";

            noResult.style.color = "#6b7280";

            noResult.innerText =
                "No matching tool found.";

            document
                .getElementById("toolsGrid")
                .appendChild(noResult);
        }

    } else {

        if (noResult) {

            noResult.remove();

        }

    }

}


/* =========================================
   ENTER KEY SEARCH
   ========================================= */

const searchInput =
    document.getElementById("toolSearch");


if (searchInput) {

    searchInput.addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                searchTools();

            }

        }
    );

}