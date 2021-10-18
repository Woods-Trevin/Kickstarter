from app.models import project
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class FAQForm(FlaskForm):
  question = StringField('question')
  answer = StringField('answer')
  project_id = IntegerField('project_id', validators=[DataRequired()])
  user_id = IntegerField('user_id', validators=[DataRequired()])