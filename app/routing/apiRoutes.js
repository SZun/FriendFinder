import Friends from '../data/friends';

const apiRoutes = (app) => {
    app.get('/api/friends', (req,res) => {
        res.json(Friends);
    })

    app.post('/api/friends', (req,res) => {
        const match = {
            name: '',
            image: '',
            isMatch: '',
        }

        const user = req.body;
        const userVals = user.values;

        for (let i = 0; i < Friends.length; i++) {
            const friendData = Friends[i];
            let dif;
    
            for (let j = 0; j < friendData.values.length; j++) {
                const friendDataVals = friendData.values[j];
                const currentUserVals = userVals[j];
        
                dif += Math.abs(+currentUserVals - +friendDataVals);
            }
    
            if (dif <= match.isMatch) {
                match.name = friendData.name;
                match.image = friendData.photo;
                match.isMatch = dif;
            }
        }

        Friends.push(user);
        res.json(match)
    })
}

export default apiRoutes;