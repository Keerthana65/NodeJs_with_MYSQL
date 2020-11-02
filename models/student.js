module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("Student", {
      firstName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      middleName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      address: {
        type: DataTypes.STRING,
        allowNull:false
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull:false
      }
    });
    return Student;
  };