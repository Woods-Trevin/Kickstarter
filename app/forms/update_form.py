from app.models import project
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class UpdateForm(FlaskForm):
  title = StringField('title', validators=[DataRequired()])
  description = StringField('description', validators=[DataRequired()])
  project_id = IntegerField('project_id', validators=[DataRequired()])
  user_id = IntegerField('user_id', validators=[DataRequired()])
