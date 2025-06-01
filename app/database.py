from sqlmodel import SQLModel, create_engine, Session

sqlite_url = "sqlite:///./kfen.db"
engine = create_engine(sqlite_url, echo=True)

def get_session():
    return Session(engine)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)