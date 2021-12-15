import { Button } from "@material-ui/core"

const SingleButton = ({func, makeCalculation}) => {
    return (
        <div style={{paddingTop: '5%', paddingBottom: '5%'}}>
            <Button variant='contained' color='primary' fullWidth onClick={() => makeCalculation(func)}>{func}</Button>
        </div>
    )
}

export default SingleButton
