from flask.cli import AppGroup
from .users import seed_users, undo_users
from .projects import seed_projects, undo_projects
from .comments import seed_comments, undo_comments
from .updates import seed_updates, undo_updates
from .faqs import seed_faqs, undo_faqs
from .tags import seed_tags, undo_tags

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_tags()
    seed_projects()
    seed_comments()
    seed_updates()
    seed_faqs()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_projects()
    undo_comments()
    undo_updates()
    undo_faqs()
    undo_tags()
    # Add other undo functions here
