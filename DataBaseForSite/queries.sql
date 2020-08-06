use [Futuristic_Travel ]
go

create table Customer(
	ID varchar(10) Primary key,
	FirstName varchar(30),
	LastName varchar(30),
	NationalCode varchar(11),
	BirthDate date,
	EmailAddress varchar(100),
	MembershipDate date,
	[status] varchar(100),
	BankCardNumber varchar(50),
	Shaba varchar(100),
	[Password] varchar(100)
);


create table Custome_Phone(
	ID varchar(10),
	MobileNumber1 varchar(12),
	PhoneNumber1 varchar(12),
	MobileNumber2 varchar(12),
	PhoneNumber2 varchar(12),
	MobileNumber3 varchar(12),
	PhoneNumber3 varchar(12)
	FOREIGN KEY (ID) REFERENCES Customer(ID)
);


create table Custome_Address(
	ID varchar(10),
	Address1 varchar(100),
	Address2 varchar(100),
	Address3 varchar(100),
	FOREIGN KEY (ID) REFERENCES Customer(ID)
);

create table Travel(
	ID varchar(15) Primary key,
	CustomerID varchar(10),
	InitialPoint varchar(20),
	Destination varchar(20),
	FlightNumber varchar(10),
	SeatNumberStart VARCHAR(5),
	SeatNumberEnd VARCHAR(5),
	Price int,
	PurchaseDate date,
	FlightDate date,
	FlightTime time,
	NumberofTicket tinyint,
	[status] varchar(15),
	FOREIGN KEY (CustomerID) REFERENCES Customer(ID)
);



select * from Customer;

insert into Customer(ID,FirstName,LastName ,NationalCode ,BirthDate,EmailAddress,MembershipDate,[status] ,[Password])
values('1911332431','Duke','Martin','6660163549','1997-04-23','DukeMartin@yahoo.com','2019-11-17','Active','dukduk11');

select * from Custome_Phone

insert into Custome_Phone(ID,MobileNumber1,PhoneNumber1,MobileNumber2)
values('1911332431','00887749316','083676111','001678997');

select * from Custome_Address

insert into Custome_Address(ID,Address1)
values('1911332431','Yeja,Acity,Astreet,Ahouse');

select * from Travel where CustomerID='1911332431';

insert into
Travel(ID ,CustomerID ,InitialPoint,Destination,FlightNumber,SeatNumberStart,SeatNumberEnd,Price,PurchaseDate,FlightDate,FlightTime,NumberofTicket,[status])
values ('2012191','1911332431','Paris','Amesterdam','Y39J12','11A',NULL,578,'2020-8-12','2020-9-12','19:30',1,'ACTIVE')

insert into
Travel(ID ,CustomerID ,InitialPoint,Destination,FlightNumber,SeatNumberStart,SeatNumberEnd,Price,PurchaseDate,FlightDate,FlightTime,NumberofTicket,[status])
values ('2001092','1911332431','Rome','Paris','G42T27','9A',NULL,418,'2020-2-20','2020-2-25','9:15',1,'DONE')

insert into
Travel(ID ,CustomerID ,InitialPoint,Destination,FlightNumber,SeatNumberStart,SeatNumberEnd,Price,PurchaseDate,FlightDate,FlightTime,NumberofTicket,[status])
values ('2002152','1911332431','Zurich','Rome','C22U94','5A',NULL,520,'2020-02-02','2020-02-18','15:45',1,'DONE')

insert into
Travel(ID ,CustomerID ,InitialPoint,Destination,FlightNumber,SeatNumberStart,SeatNumberEnd,Price,PurchaseDate,FlightDate,FlightTime,NumberofTicket,[status])
values ('2001223','1911332431','Berlin','Zurich','A32B39','1D',NULL,604,'2019-11-19','2020-01-10','22:10',1,'DONE')