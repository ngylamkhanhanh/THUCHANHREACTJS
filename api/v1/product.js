export default function handler(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json([
            {
                id: 1,
                name: "Ford Ranger",
                price: 50000,
                image: "https://example.com/ranger.jpg"
            },
            {
                id: 2,
                name: "Ford Everest",
                price: 60000,
                image: "https://example.com/everest.jpg"
            }
        ]);
    }

    return res.status(405).json({ message: "Method Not Allowed" });
}