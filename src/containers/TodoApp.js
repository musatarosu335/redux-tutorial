import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';

const mapStateToProps = ({ tasks }) => ({
  task: tasks.task,
  tasks: tasks.tasks,
});

const mapDispatchToProps = dispatch => ({
  addTask(task) {
    dispatch(addTask(task));
  },
  inputTask(task) {
    dispatch(inputTask(task));
  },
  redirectToError() {
    dispatch(push('/error'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
