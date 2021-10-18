from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import Faq, db
from app.forms import FAQForm
from flask import jsonify

FAQ_routes = Blueprint('FAQs', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@FAQ_routes.route('/', methods=['GET'])
def getFAQs():
    allFAQ = Faq.query.all()
    faqs = [faq.to_dict() for faq in allFAQ]
    return jsonify(faqs)



@FAQ_routes.route('/', methods=['POST'])
def createFAQ():
    form = FAQForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if request.method == 'POST':
        if form.validate_on_submit():
            new_FAQ = Faq(
                question=form.data['question'],
                answer=form.data['answer'],
                project_id=form.data['project_id'],
                user_id=form.data['user_id'],
            )
            db.session.add(new_FAQ)
            db.session.commit()
            faqs = Faq.query.all()
            allFaqs = [faq.to_dict()  for faq in faqs]
            return jsonify(allFaqs)
        else:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@FAQ_routes.route('/<int:id>', methods=['PATCH'])
def patchFAQ(id):
    print(request.json['idx'], '------------------------')
    print(request.json['question'], '-----------------------------')
    print(request.json['answer'], '-----------------------------')

    if request.method == 'PATCH':
        faqToChange = Faq.query.get(id)
        print(faqToChange.to_dict(), '---------------------------------')

        faqToChange.answer = request.json['answer']
        
        db.session.commit()
        allFaq = Faq.query.all()
        fillStoreWithFAQ = [faq.to_dict() for faq in allFaq]

        print(fillStoreWithFAQ)
        return jsonify(fillStoreWithFAQ)
        

@FAQ_routes.route('/<int:id>', methods=['DELETE'])
def delete_FAQ(id):
    print('----------------', request.json['idx'], '----------------')
    currentFAQ = Faq.query.filter(Faq.id == request.json['idx']).delete()
    db.session.commit()
    allFAQs = Faq.query.all()
    faqs = [faq.to_dict() for faq in allFAQs]
    print(faqs)
    return jsonify(faqs)