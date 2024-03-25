package com.multi.dahon.party.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.multi.dahon.party.vo.PartySchedule;

public interface PartyScheduleRepository extends JpaRepository<PartySchedule, Long> {

    @EntityGraph(attributePaths = "partyAttendees")
    public List<PartySchedule> findByPartyIdAndDateAfterOrderByDateDesc(Long partyId, LocalDateTime currentDate);

    @Query("select ps.id from PartySchedule ps " +
            "join ps.partyAttendees pa join pa.member m " +
            "where m.mno = :memberId")
    public List<Long> selectByMemberMno(Integer memberId);

    @Query("select ps " +
            "from PartySchedule ps " +
            "join fetch ps.partyAttendees pa " +
            "join pa.member m " +
            "where m.mno = :memberMno")
    public List<PartySchedule> selectByMySchedules(Integer memberMno, Pageable pageable);
}
