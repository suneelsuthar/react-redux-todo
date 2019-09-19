import React from 'react';
import { addTodo, getData, remove, edit, update, cancel } from '../../store/action'
import { connect } from 'react-redux';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdbreact";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { MDBInput } from "mdbreact";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './home.css'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            text: "",
            updateVal: "",
            addbtn:true,

        }
    }


    componentWillMount() {
        this.props.getData()
        
    }

    add = () => {
        this.props.addTodo(this.state.text)
        this.setState({
            text: "",
    })
    }

    render() {
        let array =this.props.data
        return (
            <Grid container spacing={12} >
                <Grid item xl={6} lg={5} md={6} sm={8} xs={12} style={{ margin: "auto", marginTop: "3%" }} >
                    Todo_React_Redux assignment (08)
            <Paper style={{ padding: "20px" }}>
                        <MDBInput label="Enter Your Todo ....." value={this.state.text} onChange={(e) => this.setState({ text: e.target.value,addbtn:false })} style={{ width: "87%" }} />
                        <Fab color="primary" disabled={this.state.addbtn} aria-label="add" onClick={this.add} style={{ float: "right", marginTop: "-60px" }} >
                            <AddIcon />
                        </Fab>
                        {
                           this.props.data.map((val, i) => {
                                return <p key={i} id="list" >
                                    {val.edit ?
                                        <MDBListGroup style={{ width: "100%" }}>
                                            <MDBListGroupItem key={i} className=" justify-text-right align-items-center"><b> {i + 1}. </b>{val.value}
                                                <div style={{ float: "right" }}>
                                                    <MDBBadge style={{ marginLeft: "5px" }} >
                                                        <EditIcon fontSize="10px" onClick={() => { return this.setState({ updateVal: val.value }), this.props.edit(val,i) }} />
                                                    </MDBBadge>
                                                    <MDBBadge style={{ marginLeft: "5px" }}  >
                                                        <DeleteIcon onClick={() => this.props.remove(val,i)} fontSize="10px" />
                                                    </MDBBadge>
                                                </div>
                                            </MDBListGroupItem>
                                        </MDBListGroup>
                                        :
                                        <MDBListGroup style={{ width: "100%" }}>
                                            <MDBListGroupItem key={i} className=" justify-text-right align-items-center"><b> {i + 1}. </b>{val.data}
                                                <input type="text" className="form-control" id="formGroupExampleInput" value={val.updateVal} disabled={val.edit} onChange={(e) => this.setState({ updateVal: e.target.value })} />
                                                <div style={{ float: "right" }}>
                                                    <MDBBadge style={{ marginLeft: "5px" }} >
                                                        <CheckCircleOutlineIcon fontSize="10px" onClick={() =>this.props.update(val,i,this.state.updateVal)} />
                                                    </MDBBadge>
                                                    <MDBBadge style={{ marginLeft: "5px" }}  >
                                                        <CancelIcon onClick={() => this.props.cancel(val, i)} fontSize="10px" />
                                                    </MDBBadge>
                                                </div>
                                            </MDBListGroupItem>
                                        </MDBListGroup>
                                    }
                                </p>
                            })}
                    </Paper>
                </Grid>
            </Grid>

        )
    }
}

const mapStateToProps = data => {
    return {
        data: data.itemArray.reverse()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (name) => dispatch(addTodo(name)),
        getData: () => dispatch(getData()),
        remove: (val, ind) => dispatch(remove(val, ind)),
        edit: (val, ind) => dispatch(edit(val, ind)),
        cancel: (val, ind) => dispatch(cancel(val, ind)),
        update: (val, ind, updateval) => dispatch(update(val, ind, updateval)),

    }


}


export default connect(mapStateToProps, mapDispatchToProps)(Home)