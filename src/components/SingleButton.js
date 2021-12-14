import { Button } from "@material-ui/core"

const SingleButton = ({func}) => {
    return (
        <div style={{'padding-top': '5%', 'padding-bottom': '5%'}}>
            <Button variant='contained' color='primary' fullWidth >{func}</Button>
        </div>
    )
}

export default SingleButton
