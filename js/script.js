// Product details
const products = {
   1: { image: "images/seed1.jpg", title: "Hibiscus Seed 1", description: "Premium hibiscus seeds for vibrant flowers." },
   2: { image: "images/seed2.jpg", title: "Hibiscus Seed 2", description: "Beautiful, colorful hibiscus for your garden." },
   3: { image: "images/seed3.jpg", title: "Hibiscus Seed 3", description: "High-quality hibiscus seeds, easy to grow." },
   4: { image: "images/seed4.jpg", title: "Hibiscus Seed 4", description: "Rare hibiscus variety with bright flowers." },
   5: { image: "images/seed5.jpg", title: "Hibiscus Seed 5", description: "Organic hibiscus seeds, ready for planting." },
   6: { image: "images/seed6.jpg", title: "Hibiscus Seed 6", description: "Tropical hibiscus with large, beautiful blooms." }
};
// Open Modal
function openModal(id) {
   document.getElementById("modalImage").src = products[id].image;
   document.getElementById("modalTitle").innerText = products[id].title;
   document.getElementById("modalDescription").innerText = products[id].description;
   document.getElementById("productModal").style.display = "block";
}
// Close Modal
function closeModal() {
   document.getElementById("productModal").style.display = "none";
}
