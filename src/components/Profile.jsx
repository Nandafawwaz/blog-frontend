import Card from 'react-bootstrap/Card';

const Profile = ()=>{
    return(
        <Card body>
    <h2 className="text-center">Profile</h2>
    <div className='my-3' style={{ textAlign:'justify' }}>
        <h6>Nama : <b>Admin</b></h6>
        <h6>Status : <b>Online</b></h6>
    </div>
    </Card>
    )
}

export default Profile;