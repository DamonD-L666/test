module.exports = {
  tableName: 'User',
  attributes: {
	id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    password: {
      type: 'string',
      size: 255
    },
    userName: {
      type: 'string',
      size: 20
    }
  }
}
