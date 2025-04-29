const app = require ('./backend/app');
const PORT = process.env.PORT || 3000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
