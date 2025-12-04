fetch("models.json")
    .then(response => response.json())
    .then(models => {
        const container = document.getElementById("models-container");

        models.forEach(model => {
            const item = document.createElement("div");
            item.className = "model-card";

            item.innerHTML = `
                <h2>${model.name}</h2>
                <p>${model.description}</p>
                <p><strong>Tags:</strong> ${model.tags.join(", ")}</p>
                <a href="${model.github}" target="_blank">Ver en GitHub</a>
            `;

            container.appendChild(item);
        });
    })
    .catch(error => console.error("Error cargando el JSON:", error));
