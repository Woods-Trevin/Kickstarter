from flask import Blueprint, request
from app.api.auth_routes import login
from app.forms import CommentForm
from app.models import Comment, db
from flask_login import login_required, current_user

comment_routes = Blueprint('comments', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@comment_routes.route('/', methods=['POST'])
@login_required
def post_comment():
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    comment = Comment(
      project_id=form.data['project_id'],
      user_id=form.data['user_id'],
      description=form.data['description'],
    )
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route('/<int:id>', methods=['DELETE', 'PATCH'])
@login_required
def delete_comment(id):
  comment = db.session.query(Comment).get(id)
  if request.method == 'DELETE':
    if current_user.id == comment.user_id:
      db.session.delete(comment)
      db.session.commit()
      return {'message': 'Comment deleted'}
    else:
      return {'message': 'Unauthorized'}
  elif request.method == 'PATCH':
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
      comment.description = form.data['description']
      db.session.commit()
      return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
