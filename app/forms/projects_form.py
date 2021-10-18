from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class ProjectForm(FlaskForm):
  title = StringField('title', validators=[Length(max=100, message='Title must not be longer than %(max)d')])
  description = StringField('description', validators=[Length(max=200, message='Title must not be longer than %(max)d')])
  tag_id = IntegerField('tag_id', validators=[DataRequired()])
  user_id = IntegerField('user_id', validators=[DataRequired()])
  campaign = StringField('campaign')
  video_src = StringField('video_src', validators=[Length(max=100, message='Title must not be longer than %(max)d')])
  image_src = StringField('image_src', validators=[Length(max=100, message='Title must not be longer than %(max)d')])
  start_date = StringField('start_date')
  end_date = StringField('end_date')
  pledge_goal = IntegerField('pledge_goal')
