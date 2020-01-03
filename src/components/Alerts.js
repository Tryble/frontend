import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';

const Alerts = ({ error }) => {
  
  useEffect(() => {
    if(error.msg !== "") message.error(error.msg)
  }, [error])

  return <></>
}

const mapStateToProps = state => ({
  error: state.errors
})

export default connect(mapStateToProps)(Alerts);