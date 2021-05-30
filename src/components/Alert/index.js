import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllAlert } from '../../actions/actionCreators';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(removeAllAlert()), 2000);
  }, []);

  return (
    <>
      {alerts
        ? alerts.map((alert) => (
            <div key={alert.id} className={`alert alert-${alert.alertType}`}>
              {alert.msg}
            </div>
          ))
        : null}
    </>
  );
};

export default Alert;
