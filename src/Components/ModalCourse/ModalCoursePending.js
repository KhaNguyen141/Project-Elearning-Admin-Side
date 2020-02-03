import React, { Component } from 'react'
import { connect } from 'react-redux';
import { adminApproveCourses, adminCancelCourses } from '../../Redux/Action/User/AdminActions';

class ModalCoursePending extends Component {
    render() {
        
        const {taiKhoan} = this.props.user;
        
        return (
           
                <div className="modal fade" id="modalCoursePending" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">List courses pending</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table tableCoursePending">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Course ID</th>
                                            <th>Name</th>
                                            <th className="text-center">Manipulation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {this.props.courseListPending.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.maKhoaHoc}</td>
                                                        <td>{item.tenKhoaHoc}</td>
                                                        <td className="text-center">
                                                            <button onClick={() => this.handleApproveCourse(item.maKhoaHoc, taiKhoan)} className="btn btn-udi-yellow mr-2">Approve</button>
                                                            <button onClick={() => this.handleCancelCourse(item.maKhoaHoc, taiKhoan)} className="btn btn-cyber-red mr-2">Cancel</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                          
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
          

        )
    }
    handleApproveCourse(maKhoaHoc, taiKhoan) {
        this.props.dispatch(adminApproveCourses(maKhoaHoc, taiKhoan));
        
    }

    handleCancelCourse(maKhoaHoc, taiKhoan) {
        this.props.dispatch(adminCancelCourses(maKhoaHoc, taiKhoan))
    }
    
}

const mapStateToProps = (state) => ({
    courseListPending: state.courseReducer.courseListPending,
   
})

export default connect(mapStateToProps)(ModalCoursePending);