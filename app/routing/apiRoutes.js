import Friends from '../data/friends';

const apiRoutes = (app) => {
    app.get('/api/friends', (req,res) => {
        res.json(Friends);
    })

    app.post('/api/friends', (req,res) => {
        const newFriend = {
            name: '',
            image: '',
            values: []
        }
    })
}

export default apiRoutes