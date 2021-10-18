from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
  description = StringField('description', validators=[DataRequired()])
  project_id = IntegerField('project_id', validators=[DataRequired()])
  user_id = IntegerField('user_id', validators=[DataRequired()])
